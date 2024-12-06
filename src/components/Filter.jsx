import { useEffect, useState } from "react";

const Filter = ({ originalData, setData }) => {
  const [species, setSpecies] = useState("");
  const [special, setSpecial] = useState(false);
  const [sterilised, setSterilised] = useState(false);
  const [vaccinated, setVaccinated] = useState(false);

  useEffect(() => {
    const filteredData = originalData.filter((item) => {
      const matchesSpecies = species ? item.species === species : true;
      const matchesSpecial = special ? item.special : true;
      const matchesSterilised = sterilised ? item.sterilisation : true;
      const matchesVaccinated = vaccinated ? item.vaccination : true;

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
    <div className="homepage-filters">
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
        Special
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
