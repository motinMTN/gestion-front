import { UsersService } from '../../../../services/users/UsersService';
import ServerSideDataTable from './ServerSideDataTable'; // Asegúrate de que la ruta es correcta

const fetchUsers = async (params: {
    page: number;
    per_page: number;
    sort_field: string;
    sort_order: 'asc' | 'desc';
}) => {
    return await UsersService.getUsersDT(params);
};

interface User {
    id: number;
    name: string;
    email: string;
    action: string;
}

const userColumns = [
    {
        name: 'ID',
        selector: (row: User) => row.id,
        sortable: true,
        sortField: 'id',
    },
    {
        name: 'Name',
        selector: (row: User) => row.name,
        sortable: true,
        sortField: 'name',
    },
    {
        name: 'Email',
        selector: (row: User) => row.email,
        sortable: true,
        sortField: 'email',
    },
    {
        name: 'Action',
        selector: (row: User) => row.action,
        sortable: false,
        cell: (row: User) => <div dangerouslySetInnerHTML={{ __html: row.action }} />,
    },
];

const UsersDT = () => {
    return (
        <ServerSideDataTable
            title="Users"
            fetchData={fetchUsers}
            columns={userColumns}
        />
    );
};

export default UsersDT;
