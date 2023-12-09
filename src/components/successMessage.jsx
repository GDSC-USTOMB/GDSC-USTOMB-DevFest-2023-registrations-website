function ClientComponent(props) {
    const { data: initialData, onSave } = props;
    
    const [data, setData] = React.useState(initialData);
  
    const onUpdate = React.useCallback(async (update) => {
      setData((prev) => ({ ...prev, ...update }));
      await onSave(update);
    }, [onSave]);
  
    // Return the JSX for the component
    return (
      // Include your JSX code here
      // For example, you can return a div with some content
      // Replace this with your actual component structure
      <div>
        <p>Data: {JSON.stringify(data)}</p>
      </div>
    );
  }
  