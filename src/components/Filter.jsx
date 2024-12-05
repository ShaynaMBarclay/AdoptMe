import { useEffect, useState } from "react";

const Filter = ({ originalData, setData }) => {
  // State for each filter criterion
  const [species, setSpecies] = useState("");
  const [special, setSpecial] = useState(false);
  const [sterilised, setSterilised] = useState(false);
  const [vaccinated, setVaccinated] = useState(false);

  useEffect(() => {
    // Filter data based on current filter state
    const filteredData = originalData.filter((item) => {
      const matchesSpecies = species ? item.species === species : true;
      const matchesSpecial = special ? item.specialTreatment : true;
      const matchesSterilised = sterilised ? item.sterilised : true;
      const matchesVaccinated = vaccinated ? item.vaccinated : true;

      return (
        matchesSpecies &&
        matchesSpecial &&
        matchesSterilised &&
        matchesVaccinated
      );
    });

    setData(filteredData);
  }, [species, special, sterilised, vaccinated, originalData]);

  return (
    <div>
      <select onChange={(e) => setSpecies(e.target.value)} value={species}>
        <option value="">All Species</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={special}
          onChange={(e) => setSpecial(e.target.checked)}
        />
        Special Treatment
      </label>

      <label>
        <input
          type="checkbox"
          checked={sterilised}
          onChange={(e) => setSterilised(e.target.checked)}
        />
        Sterilised
      </label>

      <label>
        <input
          type="checkbox"
          checked={vaccinated}
          onChange={(e) => setVaccinated(e.target.checked)}
        />
        Vaccinated
      </label>
    </div>
  );
};

export default Filter;
