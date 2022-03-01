export interface Props {
  label: string;
  color: 'primary' | 'secondary' | 'error';
  onClick: () => void;
}
