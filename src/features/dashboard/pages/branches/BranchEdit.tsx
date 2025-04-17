// BranchEdit.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CrearFormulario from './BranchCreateForm'; // Asegúrate de importar el componente correcto
import { BranchesService } from "../../../../services/branches/BranchesService";
import { IBranch } from "../../../../interfaces/branches/IBranch";

const BranchEdit = () => {
    const { id } = useParams<{ id: string }>();
    const [branch, setBranch] = useState<IBranch | null>(null);

    useEffect(() => {
        const fetchBranch = async () => {
            try {
                const response = await BranchesService.getBranch(parseInt(id, 10));
                console.log(response);
                setBranch(response);
            } catch (error) {
                console.error('Error fetching branch:', error);
            }
        };

        fetchBranch();
    }, [id]);

    const handleSubmit = async (formData: IBranch) => {
        try {
            await BranchesService.updateBranch(id, formData);
            // Redirige o muestra mensaje de éxito
        } catch (error) {
            console.error('Error updating branch:', error);
        }
    };

    return (
        <div>
            <h1>Editar Sucursal</h1>
            {branch ? (
                <CrearFormulario onSubmit={handleSubmit} initialData={branch} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BranchEdit;
