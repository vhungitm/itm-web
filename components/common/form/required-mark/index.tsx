const RequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
  <>
    {label}&nbsp;{required && <span style={{ color: 'red' }}> * </span>}
  </>
);

export default RequiredMark;
