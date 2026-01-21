import { useId } from "react";
import "./jobSelect.css";

function JobSelect({
  filtersValue,
  setFiltersValue,
  setCurrentPage,
  initialTechnology,
  initialLocation,
  initialExperience,
}) {
  const techFilterID = useId();
  const locationFilterID = useId();
  const experienceFilterID = useId();

  const handleChange = (event) => {
    event.preventDefault();
    const selectedFilter = event.target.name;
    const selectedValue = event.target.value;

    setFiltersValue({ ...filtersValue, [selectedFilter]: selectedValue });
    setCurrentPage(1);
  };

  return (
    <>
      <div className="job-select__container">
        <select
          defaultValue={initialTechnology}
          name="technology"
          id={techFilterID}
          onChange={handleChange}
        >
          <option value="">Tecnología</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="react">React</option>
          <option value="nodejs">Node.js</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="c">C</option>
          <option value="c++">C++</option>
          <option value="ruby">Ruby</option>
          <option value="php">PHP</option>
        </select>

        <select
          defaultValue={initialLocation}
          name="location"
          id={locationFilterID}
          onChange={handleChange}
        >
          <option value="">Ubicación</option>
          <option value="remoto">Remoto</option>
          <option value="cdmx">Ciudad de México</option>
          <option value="guadalajara">Guadalajara</option>
          <option value="monterrey">Monterrey</option>
          <option value="barcelona">Barcelona</option>
        </select>

        <select
          defaultValue={initialExperience}
          name="experience"
          id={experienceFilterID}
          onChange={handleChange}
        >
          <option value="">Experiencia</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid-level</option>
          <option value="senior">Senior</option>
          <option value="lead">Lead</option>
        </select>
      </div>
    </>
  );
}

export default JobSelect;
