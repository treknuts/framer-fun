import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping:25, 
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
};

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const newspaper = {
  hidden: {
    transform: "scale(0) rotate(720deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotate(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotate(-720deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const badSuspension = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transform: "scale(0) rotateX(-360deg)",
  },
  visible: {
    y: "-25vh",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const gifYouUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

const Modal = ({ variant, handleClose, text }) => {
    console.log(variant);
    return (<Backdrop onClick={handleClose}>
        {variant === "dropIn" && (
            <motion.div
                onClick={(e) => e.stopPropagation()}
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            dragConstraints={{ left: -100, right: 100}}
            drag="x"
        >
            <p>{ text }</p>
        </motion.div>
        )}

        {variant === "flip" && (
            <motion.div
                onClick={(e) => e.stopPropagation()}
            className="modal orange-gradient"
            variants={flip}
            initial="hidden"
            animate="visible"
            exit="exit"
            dragConstraints={{ left: -100, right: 100}}
            drag="x"
        >
            <p>{ text }</p>
        </motion.div>
        )}

        {variant === "newspaper" && (
            <motion.div
                onClick={(e) => e.stopPropagation()}
            className="modal orange-gradient"
            variants={newspaper}
            initial="hidden"
            animate="visible"
            exit="exit"
            dragConstraints={{ left: -100, right: 100}}
            drag="x"
        >
            <p>{ text }</p>
        </motion.div>
        )}

        {variant === "badSuspension" && (
            <motion.div
                onClick={(e) => e.stopPropagation()}
            className="modal orange-gradient"
            variants={badSuspension}
            initial="hidden"
            animate="visible"
            exit="exit"
            dragConstraints={{ left: -100, right: 100}}
            drag="x"
        >
            <p>{ text }</p>
        </motion.div>
        )}
        {variant === "gifYouUp" && (
            <motion.div
                onClick={(e) => e.stopPropagation()}
            className="modal orange-gradient"
            variants={gifYouUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            dragConstraints={{ left: -100, right: 100}}
            drag="x"
        >
            <p>{ text }</p>
        </motion.div>
        )}
    </Backdrop>);
}

export default Modal;