
# Sorting Data

This project demonstrates how to implement sorting functionality for different data types such as numbers and strings using TypeScript. It defines a generic sorting mechanism through an abstract class and applies it to specific data types.

## Project Structure

- `src/index.ts`: Entry point for the application, demonstrating the sorting of numbers and strings.
- `src/Numbers.ts`: Contains the `Numbers` class, which implements sorting for an array of numbers.
- `src/Strings.ts`: Contains the `Strings` class, which implements sorting for a string.
- `src/SortData.ts`: Contains the abstract `SortData` class that defines the structure for sorting operations.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository_url>
cd sorting-data
npm install
```

## Usage

To run the project, you can use the following commands:

- **Start building** the TypeScript files with `tsc`:

  ```bash
  npm run start:build
  ```

- **Start running** the project with `nodemon` (automatically rebuilds the project on changes):

  ```bash
  npm run start:run
  ```

- **Start both** build and run processes concurrently:

  ```bash
  npm start
  ```

### Example

The `index.ts` demonstrates sorting functionality for an array of numbers and a string:

1. It first sorts an array of years extracted from date objects in ascending order.
2. It then sorts a string alphabetically, ignoring case.

The console output will show the sorted data for both numbers and strings.

```bash
[2001, 2029, 2035, 2100]
"FGvdy"
```

## How it Works

### `SortData` Class

The `SortData` class is an abstract class that defines the structure for sorting. It has three key methods:
- `compare(indexLeft, indexRight)`: Compares two elements at given indices.
- `swap(indexLeft, indexRight)`: Swaps the elements at the given indices.
- `length`: The length of the data being sorted.

### `Numbers` Class

The `Numbers` class extends `SortData` and sorts an array of numbers. It implements the `compare` and `swap` methods to compare and swap elements in the number array.

### `Strings` Class

The `Strings` class extends `SortData` and sorts a string. It compares characters in the string by their alphabetical order, ignoring case, and swaps them accordingly.

## License

This project is licensed under the ISC License.
