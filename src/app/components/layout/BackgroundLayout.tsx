import { JsxElement } from 'typescript';

const BackgroundLayout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="absolute -z-10 h-full w-full before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black before:opacity-40">
      {children}
    </div>
  );
};

export default BackgroundLayout;
