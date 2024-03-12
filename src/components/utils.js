
export const formatDateString = (originalDateString) => {
    const dateObject = new Date(originalDateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    return formattedDate;
}

  
