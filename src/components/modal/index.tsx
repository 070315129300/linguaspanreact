// @ts-ignore
import Rodal from "rodal";
import { classes } from "@/core/common/utils";
import "rodal/lib/rodal.css";

interface RodalProps {
  children: React.ReactNode;
  isVisible: boolean;
  customStyles?: React.CSSProperties;
  className?: string;
  onClose: () => void;
}
const Modal: React.FC<RodalProps> = ({
  children,
  isVisible,
  customStyles,
  className = "",
  onClose,
}) => {
  return (
    <Rodal
      visible={isVisible}
      onClose={onClose}
      customStyles={customStyles}
      className={classes("rounded-lg p-6", className)}
    >
      <div className="mt-5">{children}</div>
    </Rodal>
  );
};

export default Modal;
