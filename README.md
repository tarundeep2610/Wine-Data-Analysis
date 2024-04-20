## Wine Data Analysis Task

This project is aimed at calculating statistical measures of the Wine Data Set and displaying them as tables using React with Mantine v7.

### Technologies Used
- TypeScript/JavaScript
- React (CRA)
- Yarn
- Mantine v7

### Task Description
1. **Statistical Calculations:**
   - Calculate class-wise mean, median, and mode of "Flavanoids" for the entire dataset.
   - Calculate class-wise mean, median, and mode of "Gamma" based on a new property calculated for each data point.

2. **Implementation Details:**
   - Utilize utility functions to compute statistical measures without third-party libraries.
   - Display statistical results in React components as tabular data.

3. **Requirements:**
   - Use TypeScript or JavaScript for development.
   - Implement tables using Mantine v7.
   - Ensure the project renders correctly upon running `yarn start`.
   - Clean up unused code, CSS, test files, etc., to reduce clutter.
   - Use Yarn instead of NPM.
   - No additional libraries like Bootstrap, jQuery, or Lodash should be used.

### Project Structure
- **src/components/FlavonoidsTable.tsx**:
  - Calculates and displays statistical measures for "Flavanoids".
- **src/components/GammaTable.tsx**:
  - Calculates and displays statistical measures for "Gamma" based on a derived property.
- **src/components/Header.tsx**:
  - Displays a header component with the title "Wine Data Analytics".
