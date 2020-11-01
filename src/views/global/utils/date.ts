const ISOToHuman = (dateString: string) => {
  const dateFromParam = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(dateFromParam);
};

export { ISOToHuman };
