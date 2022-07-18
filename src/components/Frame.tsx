import Window from "./Window";

interface windowProps {
  id: string;
  title: string;
  src: string;
  handleClose?: () => void;
}

export default function Frame({ id, title, src, handleClose }: windowProps) {
  return (
    <Window id={id} title={title} handleClose={handleClose}>
      <iframe
        className="w-full h-full max-w-full max-h-full"
        title={title}
        src={src}
      />
    </Window>
  );
}
