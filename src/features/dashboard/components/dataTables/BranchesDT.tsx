import { BranchDTElement, BranchesDTProps } from '../../../../interfaces/branches/IBranch';
import ServerSideDataTable from './ServerSideDataTable';
import { useNavigate } from 'react-router-dom';
import { PATH_BRANCH_EDIT } from '../../../../router/paths/dashboard_paths';
import './DataTable.css';


const BranchesDT: React.FC<BranchesDTProps> = ({ fetchBranches, specialties }) => {
    const navigate = useNavigate();

    const handleEditClick = (id: number) => {
        navigate(PATH_BRANCH_EDIT.replace(':id', id.toString()));
    };

    const branchColumns = [
        {
            name: 'Name',            
            sortable: true,
            width: '22%',
            sortField: 'branches.name',
            cell: (row: BranchDTElement) => (
                <div title={row.name} className='ellipsis'>
                    {row.name}
                </div>
            ),
        },
        {
            name: 'Citas',            
            sortable: true,
            sortField: 'branches.allows_appointments',
            width: '10%',
            cell: (row: BranchDTElement) => (
                row.allows_appointments === 1 ?
                    <span className="permite-citas-1 text-green-500 font-bold" title="Elegible para reservación de citas en línea">
                        <i className="fa fa-calendar-check-o " aria-hidden="true"></i>
                    </span>
                    :
                    <span className="permite-citas-0 text-red-500 font-bold" title="No es elegible para reservación de citas en línea">
                        <i className="fa fa-calendar-times-o font-bold" aria-hidden="true"></i>
                    </span>
            ),

        },
        {
            name: 'Ciudad/Estado',            
            sortable: true,
            width: '18%',
            sortField: 'states.name',
            cell: (row: BranchDTElement) => (
                <div title={`${row.city}-${row.state}`} className='ellipsis'>
                    {row.city}-{row.state}
                </div>
            ),
        },
        {
            name: 'Personal',            
            sortable: true,
            width: '12%',
            sortField: 'personal_noFunka',
            cell: (row: BranchDTElement) => (
                <div title={(row.personal).toString()} className='ellipsis'>
                    {row.personal}
                </div>
            ),
        },
        {
            name: 'Última actualización',            
            sortable: true,
            sortField: 'last_update',
            width: '25%',
            cell: (row: BranchDTElement) => (
                <div title={(row.last_update)} className='ellipsis'>
                    {row.last_update}
                </div>
            ),
        },
        {
            name: 'Action',
            sortable: false,            
            cell: (row: BranchDTElement) => (

                <div className='custom-action-cell'>
                    <button
                        className="text-gray-500 px-2 py-1 rounded-md shadow-sm cursor-pointer"
                        onClick={() => handleEditClick(row.id)}
                    >
                        <i className="fa-solid fa-edit"></i>
                    </button>
                </div>

            ),            
        },
    ];

    // Define custom styles with default values
    const customStyles = {
        headCells: {
            style: {
                // backgroundColor: '#f3f4f6',
                color: '#333',
                fontWeight: '600',
                padding: '20px',
                textAlign: 'left',
                fontSize: '16px',
                borderBottom: '1px solid #ddd',
                borderTop: '1px solid #ddd',
            },
        },
        cells: {
            style: {
                padding: '20px',
                fontSize: '15px',
            },
        },        
    };

    return (
        <ServerSideDataTable
            title=""
            defaultSortField='branches.id'
            fetchData={fetchBranches}
            columns={branchColumns}
            customStyles={customStyles} // Aplica los estilos personalizados aquí
            enableSearch={true}
            // specialties={specialties} 
        />
    );
};

export default BranchesDT;
