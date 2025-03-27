import './ProjectComponent.scss';

type ProjectComponentProps = {
  img: string;
  altText: string;
};

export default function ProjectComponent({
  img,
  altText,
}: ProjectComponentProps) {
  return (
    <>
      <img src={img} alt={altText} />
    </>
  );
}
