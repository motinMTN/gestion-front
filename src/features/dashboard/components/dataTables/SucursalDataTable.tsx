import { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { DistributorService } from '../../../../services/distributors/DistributorService';

interface Sucursal {
  id: number;
  name: string;
  domain: string;
  action: string;
}

const SucursalDataTable: React.FC = () => {
  const [data, setData] = useState<Sucursal[]>([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page: number, sortField = 'id', sortOrder = 'asc') => {
    setLoading(true);
    const params = {
      page,
      per_page: perPage,
      sort_field: sortField,
      sort_order: sortOrder,
    };

    try {
      const response = await DistributorService.getDistributorsDT(params);
      console.log('responses:', response);

      // Verifica que la respuesta contiene las propiedades esperadas
      if (response && response.data && typeof response.recordsTotal === 'number') {
        setData(response.data);
        setTotalRows(response.recordsTotal);        
      } else {
        console.error('La respuesta de la API no tiene el formato esperado.', response);
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1); // Fetch data for the first page initially
  }, [perPage]);

  const handlePageChange = (page: number) => {
    fetchData(page);
  };

  const handleSort = (column: TableColumn<Sucursal>, sortDirection: 'asc' | 'desc') => {
    // Aquí usamos el sortField definido en las columnas
    const sortField = column.sortField || column.name?.toString().toLowerCase();
    fetchData(1, sortField, sortDirection);
  };

  const columns: TableColumn<Sucursal>[] = [
    {
      name: 'ID',
      selector: (row: Sucursal) => row.id,
      sortable: true,
      sortField: 'id',
    },
    {
      name: 'Name',
      selector: (row: Sucursal) => row.name,
      sortable: true,
      sortField: 'name',
    },
    {
      name: 'Domain',
      selector: (row: Sucursal) => row.domain,
      sortable: true,
      sortField: 'domain',
    },
    {
      name: 'Action',
      selector: (row: Sucursal) => row.action,
      sortable: false,
      cell: (row: Sucursal) => <div dangerouslySetInnerHTML={{ __html: row.action }} />,
    },
  ];

  return (
    <DataTable
      title="Sucursal"
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      paginationServer={true}
      sortServer={true}
      paginationTotalRows={totalRows}
      onChangePage={handlePageChange}
      onSort={handleSort}
      paginationPerPage={perPage}
      onChangeRowsPerPage={(newPerPage) => setPerPage(newPerPage)}
    />
  );
};

export default SucursalDataTable;