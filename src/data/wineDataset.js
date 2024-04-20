// Import the wineData JSON file that contains wine-related data
const wineData = require("./wineData.json");

// Extract unique values of 'Alcohol' from wineData using a set to avoid duplicates
const set = [...new Set(wineData.map((item) => item?.Alcohol))];

// Calculate the mean of an array of numeric values
const calculateMean = (values) => {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += Number(values[i]);
  }
  return sum / values.length;
};

// Calculate the median of an array of numeric values
const calculateMedian = (values) => {
  const sortedValues = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sortedValues.length / 2);

  if (sortedValues.length % 2 === 0) {
    return (sortedValues[mid - 1] + sortedValues[mid]) / 2;
  } else {
    return sortedValues[mid];
  }
};

// Calculate the mode (most frequent value) of an array of values
const calculateMode = (values) => {
  const counts = {};
  values.forEach((val) => {
    counts[val] = counts[val] ? counts[val] + 1 : 1;
  });

  let mode = 0;
  let maxCount = 0;
  Object.keys(counts).forEach((key) => {
    const count = counts[parseInt(key, 10)];
    if (count > maxCount) {
      mode = parseInt(key, 10);
      maxCount = count;
    }
  });

  return mode;
};

// Calculate statistics for Flavonoids based on unique 'Alcohol' values
const calculateFlavonoidsStats = () => {
  // Iterate over each unique 'Alcohol' value in the set
  const stats = set.map((item) => {
    // Filter wineData to get data entries with the current 'Alcohol' value,
    // and map to extract 'Flavanoids' values (or default to 0 if not available)
    const filteredData = wineData
      .filter((temp) => temp.Alcohol === item)
      .map((temp) => (temp?.Flavanoids ? temp?.Flavanoids : 0));

    // Calculate mean, median, and mode for the filtered 'Flavanoids' values
    const mean = calculateMean(filteredData).toFixed(3);
    const median = calculateMedian(filteredData).toFixed(3);
    const mode = calculateMode(filteredData).toFixed(3);

    // Return an object containing statistics for the current 'Alcohol' value
    return { column: item, mean: mean, median: median, mode: mode };
  });

  return stats; // Return an array of statistical objects
};

// Calculate statistics for Gamma based on unique 'Alcohol' values
const calculateGammaStats = () => {
  // Iterate over each unique 'Alcohol' value in the set
  const stats = set.map((item) => {
    // Filter wineData to get data entries with the current 'Alcohol' value,
    // calculate 'Gamma' based on specific properties, and map the result
    const gammaData = wineData
      .filter((temp) => temp.Alcohol === item)
      .map((item) => {
        const val = (item?.Ash * item?.Hue) / item?.Magnesium; // Calculate 'Gamma'
        return val;
      });

    // Calculate mean, median, and mode for the 'Gamma' data
    const mean = calculateMean(gammaData).toFixed(3);
    const median = calculateMedian(gammaData).toFixed(3);
    const mode = calculateMode(gammaData).toFixed(3);

    // Return an object containing statistics for the current 'Alcohol' value
    return { column: item, mean: mean, median: median, mode: mode };
  });

  return stats; // Return an array of statistical objects
};

// Export the functions to calculate Flavonoids and Gamma statistics
export { calculateFlavonoidsStats, calculateGammaStats };
