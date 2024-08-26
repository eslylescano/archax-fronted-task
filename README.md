# React Exercise

This exercise is to help us better understand your experience in react and typescript, how you would go about structuring your work, code quality, styles, etc...

## Setup

To get started, install the dependencies with `yarn install`.

Run the application with `yarn start`.

Launch application in browser at [http://localhost:5173](http://localhost:5173).

## Task

We would like you to build a simple data explorer as shown in the image below. This is a wireframe to demonstrate how the app should look once complete. Do not add any additional dependencies and you do not need to amend the data service to complete this task.

![React Exercise wireframe](/react-exercise.png)

The data is a list of application records and is fetchable at [http://localhost:8080/data](http://localhost:8080/data). Each application has 3 levels of business capabilities. Business capabilities are hierarchical as shown in the image (Business capability 1 -> Business capability 2 -> Business capability 3)

The app should -

- Requests the dataset.
- Build a hierarchical navigation tree displaying the different levels of business capabilities. Bonus points if we can expand/collapse the navigation tree.
- Have a range slider to be able to further filter the dataset based on the total spending value
- Present a list of applications from the data set, showing name and total spend. The list depends on the navigation tree and the range filter

Additional notes

- Please spend as much time as you feel necessary to complete the task and show off your skills.
- We will be looking at code/file structure, code quality & best practices & design.
- Add comments where necessary or to document any assumptions/considerations you may have.
- You shouldn't need to use any external libraries

# Business Capability Tree and Application List

## Overview

This project consists of two main React components:

1. **BusinessCapabilityTree**: Displays a hierarchical tree structure of business capabilities with nested nodes and associated applications.
2. **ApplicationList**: Displays a list of applications, which can be filtered based on the selected business capabilities.

## Components

### BusinessCapabilityTree

This component renders a tree structure of business capabilities. Each node in the tree can be expanded or collapsed to reveal nested capabilities and associated applications.

**Props:**
- `applications`: An array of `Application` objects to populate the tree structure.

**Solution:**
- **Hierarchical Data Structure**: The `BusinessCapabilityTree` component processes the list of applications and organizes them into a hierarchical structure based on their business capabilities.
- **Tree Rendering**: It dynamically generates the tree structure, allowing for expand/collapse functionality for each node. Only nodes with children are expandable.
- **State Management**: Uses local state to manage the expansion of nodes, ensuring that the tree displays only relevant data.

### ApplicationList

This component displays a list of applications. It takes the filtered applications as a prop and renders them in a list format.

**Props:**
- `applications`: An array of `Application` objects to be displayed.

**Solution:**
- **Filtered Display**: The `ApplicationList` component presents the list of applications based on the selected business capabilities and any applied filters.
- **List Rendering**: It renders each application’s name and total spend, providing a clear view of the filtered results.

## Setup

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/eslylescano/archax-fronted-task.git
   cd your-repository
   ```

2. **Install Dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:
   ```sh
   yarn install
   ```

3. **Run the Application:**
   Start the development server with:
   ```sh
   yarn start
   ```

   This will start the app at `http://localhost:3000`.

## File Structure

- `src/`
  - `components/`
    - `BusinessCapabilityTree/`
      - `BusinessCapabilityTree.tsx`
      - `BusinessCapabilityTree.css`
      - `BusinessCapabilityTreeItem/`
        - `BusinessCapabilityTreeItem.tsx`
        - `BusinessCapabilityTreeItem.css`
    - `ApplicationList/`
      - `ApplicationList.tsx`
      - `ApplicationList.css`
  - `hooks/`
    - `useData.ts`
  - `App.tsx`
  - `index.tsx`
- `public/`
- `package.json`
