import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data";
import Button from "./components/ui/Button";

function App() {
  // ** STATE
  const [isOpen, setIsOpen] = useState(false);

  // ** HANDLER
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  // ** Renders
  const renderProductsList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container">
          <Button className="bg-indigo-700 hover:bg-indigo-900" onClick={openModal}>ADD</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductsList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <div className="flex items-center space-x-3" >
          <Button className="bg-indigo-700 hover:bg-indigo-900">Submit</Button>
          <Button className="bg-gray-400 hover:bg-gray-600">Cancel</Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
