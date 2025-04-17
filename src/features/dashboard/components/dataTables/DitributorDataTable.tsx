import { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { DistributorService } from '../../../../services/distributors/DistributorService';

interface Distributor {
  id: number;
  name: string;
  domain: string;
  action: string;
}

const DistributorDataTable: React.FC = () => {
  const [data, setData] = useState<Distributor[]>([]);
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

  const handleSort = (column: TableColumn<Distributor>, sortDirection: 'asc' | 'desc') => {
    // Aquí usamos el sortField definido en las columnas
    const sortField = column.sortField || column.name?.toString().toLowerCase();
    fetchData(1, sortField, sortDirection);
  };

  const columns: TableColumn<Distributor>[] = [
    {
      name: 'ID',
      selector: (row: Distributor) => row.id,
      sortable: true,
      sortField: 'id',
    },
    {
      name: 'Name',
      selector: (row: Distributor) => row.name,
      sortable: true,
      sortField: 'name',
    },
    {
      name: 'Domain',
      selector: (row: Distributor) => row.domain,
      sortable: true,
      sortField: 'domain',
    },
    {
      name: 'Action',
      selector: (row: Distributor) => row.action,
      sortable: false,
      cell: (row: Distributor) => <div dangerouslySetInnerHTML={{ __html: row.action }} />,
    },
  ];

  return (
    <DataTable
      title="Distribuidores"
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

export default DistributorDataTable;