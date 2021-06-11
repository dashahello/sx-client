import { useEffect, useState } from 'react';

export default function FilterSuccess() {
  const [filterEnabled, setFilterEnabled] = useState('false');

  // useEffect(() => {
  //   console.log(filterEnabled);
  // }, [filterEnabled]);

  function handleChange() {
    setFilterEnabled(filterEnabled ? false : true);
  }

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        checked={filterEnabled === true}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        Show only successful launches
      </label>
    </div>
  );
}
