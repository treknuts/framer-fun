import './App.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState("dropIn");

  const handleVariant = (e) => setModalVariant(e.target.value);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <h1>Epic Framer Motion Modal Animations</h1>
      <motion.select className="input" onChange={handleVariant}>
        <option value="dropIn">🪂 Drop in</option>
        <option value="flip">🛹 Flip</option>
        <option value="newspaper">🗞 Newspaper</option>
        <option value="badSuspension">🔩 Bad Suspension</option>
        <option value="gifYouUp">🎸 GIF you up</option>
      </motion.select>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && <Modal variant={modalVariant} modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
