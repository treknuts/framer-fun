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
    <>
      <motion.main>
      <Header />
      <SubHeader text="Animated Modals" />
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
      <ModalContainer>
        {modalOpen && <Modal variant={modalVariant} modalOpen={modalOpen} handleClose={close} />}
      </ModalContainer>
      </motion.main>
    </>
  );
}

const Header = () => (
  <motion.h1 className="pink">
    Framer Motion
    <span className="light-blue"> ⚛️ React</span>
  </motion.h1>
);

const SubHeader = ({ text }) => <motion.h2 className="sub-header">{text}</motion.h2>;

const ModalContainer = ({ children, label }) => (
  // Enables the animation of components that have been removed from the tree
  <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    exitBeforeEnter={true}
  >
    {children}
  </AnimatePresence>
);

export default App;
