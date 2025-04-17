import { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import Spinner from '../../../../components/spinner/Spinner';
import './DataTable.css';
import SearchInputButton from './SearchInputButton';
import useAlert from '../../../../hooks/useAlert';
import { paramsGetErrorDT, paramsUnexpectedAPIFormatDT } from '../../../../helpers/AlertDialog/AlertParams/SSDTAlerts';
// import SearchInputButton from './SearchInputButton'; // Ajusta la ruta según tu estructura
// import { ISelectedProps } from '../../../../interfaces/generalInputs/IInputs'; 
// import SpecialtiesSelector from '../../../../components/specialties/SpecialtiesSelector';



interface ServerSideDataTableProps<T> {
  title: string;
  fetchData: (params: {
    page: number;
    per_page: number;
    sort_field: string;
    sort_order: 'asc' | 'desc';
    searchTerm?: string;
  }) => Promise<{ data: T[]; totalRecordsFiltered: number }>;
  columns: TableColumn<T>[];
  defaultSortField?: string;
  defaultSortOrder?: 'asc' | 'desc';
  customStyles?: any;
  enableSearch?: boolean;
  // specialties?: ISelectedProps[];
}

const ServerSideDataTable = <T extends object>({
  title,
  fetchData,
  columns,
  defaultSortField = 'id',
  defaultSortOrder = 'asc',
  customStyles = {},
  enableSearch = false,
  // specialties = [],
}: ServerSideDataTableProps<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const swal2 = useAlert();
  // const [selectedSpecialty, setSelectedSpecialty] = useState<string | number>('');

  const loadData = async (page: number, sortField = defaultSortField, sortOrder = defaultSortOrder) => {
    
    setLoading(true);
    

    try {
      const response = await fetchData({
        page,
        per_page: perPage,
        sort_field: sortField,
        sort_order: sortOrder,
        searchTerm: searchTerm,
      });

      if (response && Array.isArray(response.data) && typeof response.totalRecordsFiltered === 'number') {
        setData(response.data);        
        setTotalRows(response.totalRecordsFiltered);
      } else {
        swal2({...paramsUnexpectedAPIFormatDT})
        console.error('La respuesta de la API no tiene el formato esperado.', response);        
      }
    } catch (error) {
      swal2({...paramsGetErrorDT})
      console.error('Error al obtener los datos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(1);
  }, [perPage]);

  const handlePageChange = (page: number) => {
    loadData(page);
  };

  const handleSort = (column: TableColumn<T>, sortDirection: 'asc' | 'desc') => {
    const sortField = column.sortField || column.name?.toString().toLowerCase();
    loadData(1, sortField, sortDirection);
  };

  const handleSearch = () => {
    //setSearchTermToUse(searchTerm);
    loadData(1);
  };

  // const handleSpecialtyChange = (event: { target: { name: string; value: string | number } }) => {
  //   setSelectedSpecialty(event.target.value);
  // };

  const defaultCustomStyles = {
    headCells: {
      style: {
        backgroundColor: '#f3f4f6',
        color: '#333',
        fontWeight: 'bold',
        padding: '12px',
        textAlign: 'left',
      },
    },
    cells: {
      style: {
        padding: '12px',
      },
    },    
  };


  return (
    <div>
      <div className="flex justify-between">
        <div className="">
          <div className="flex ml-4">
            <div className="fieldset-wrapper">
              <input type="submit" id="edit-actionviews-bulk-operations-delete-item" name="sucursales_delete" value="Elimnar sucursales" disabled className="delete-select p-2" />
            </div>
          </div>
        </div>
        
        {enableSearch === true ? 
          <SearchInputButton
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={handleSearch}
            buttonText="Buscar"
          /> : ''
        }

        {/* <div className="flex">
          <div className="">
            <SpecialtiesSelector
              value={selectedSpecialty}
              onChange={handleSpecialtyChange}
              disabled={loading}
            />
          </div>
          <div className="">
            <SearchInputButton
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={handleSearch}
              buttonText="Buscar"
            />
          </div>
        </div> */}
      </div>
      <DataTable
        title={title}
        columns={columns}
        data={data}
        progressPending={loading}
        progressComponent={<Spinner />}
        pagination
        paginationServer={true}
        sortServer={true}
        paginationTotalRows={totalRows}
        onChangePage={handlePageChange}
        onSort={handleSort}
        paginationPerPage={perPage}
        onChangeRowsPerPage={(newPerPage) => setPerPage(newPerPage)}
        selectableRows
        selectableRowsVisibleOnly
        fixedHeader
        customStyles={customStyles || defaultCustomStyles}
      />
    </div>
  );
};

export default ServerSideDataTable;
