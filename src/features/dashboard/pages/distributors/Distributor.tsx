import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DistributorDataTable from "../../components/dataTables/DitributorDataTable";
import CreateDistributorDialog from './CreateDistributorDialog'; // Asegúrate de ajustar la ruta según la ubicación del archivo

const Distributors = () => {
  const [selectedDialog, setSelectedDialog] = useState<string | null>(null);

  const handleClickOpen = (dialogName: string) => {
    setSelectedDialog(dialogName);
  };

  const handleClose = () => {
    setSelectedDialog(null);
  };

  return (
    <section className="p-3 sm:p-5 antialiased">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-white">
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <Button 
                onClick={() => handleClickOpen("createDistributor")} 
                type="button" 
                className="flex items-center justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Agregar
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <DistributorDataTable />
          </div>
        </div>
      </div>
      <CreateDistributorDialog 
        open={selectedDialog === "createDistributor"} 
        onClose={handleClose} 
      />
    </section>
  );
};

export default Distributors;