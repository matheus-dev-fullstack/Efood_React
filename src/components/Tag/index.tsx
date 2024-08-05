import { TagContainer } from './styles';

export type Props = {
  size?: 'small' | 'big';
  type?: 'tag' | 'button';
  children?: string;
};

const Tag = ({ children, size = 'small', type = 'tag' }: Props) => {
  let content = children;

  if (type === 'button') {
    content = 'Saiba mais';
  }
  return (
    <TagContainer size={size} type={type}>
      {content}
    </TagContainer>
  );
};
export default Tag;
