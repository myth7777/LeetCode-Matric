# LeetCode Stats Dashboard

This project is a LeetCode Stats Dashboard that fetches and displays your LeetCode performance data in a visually appealing way. The dashboard shows key metrics like the total number of questions solved, ranking, acceptance rate, contribution points, and more. It also includes a smooth, circular progress bar representing your submission data.

## Features

- Displays your LeetCode stats such as total solved questions, ranking, acceptance rate, and contribution points.
- A smooth, circular progress bar that visualizes your submissions.
- Fetches data from the LeetCode API and displays it in real-time.
- Customizable progress bar colors and styles.
- Lightweight and responsive UI.

## Project Structure

\`\`\`
/LeetCode-Stats-Dashboard
├── index.html        # The main HTML file that contains the structure of the page
├── style.css         # CSS file for styling the dashboard and progress bars
├── main.js           # JavaScript file to fetch and display the LeetCode stats
├── assets/           # Folder for any images or assets (if needed)
└── README.md         # This README file
\`\`\`

## Installation

To get started with the project:

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/myth7777/LeetCode-Matric.git
   \`\`\`
   
2. Open \`index.html\` in your browser to see the project in action.

## Usage

1. **Fetching Data**: The project fetches data from a predefined LeetCode profile API. Ensure that the correct data is being retrieved by your backend or API service. You may need to adjust the URL or the way the data is fetched.

2. **Displaying Stats**: The main section of the dashboard will display the following statistics:
   - **Total Questions Solved**
   - **Ranking**
   - **Acceptance Rate**
   - **Contribution Points**

   Each stat is displayed in a simple card format with a label and value.

3. **Circular Progress Bar**: The circular progress bar dynamically adjusts according to the total submissions data.

## Customization

- You can easily modify the appearance of the progress bar by changing the \`background-color\` or \`conic-gradient\` colors in the \`circle\` class in \`style.css\`.
- To modify the stats or add new ones, simply update the \`cardsData\` array in the \`main.js\` file.

## Example of API Response

Here's an example of the API response that the project expects:

\`\`\`json
{
   "status": "success",
   "message": "retrieved",
   "totalSolved": 175,
   "totalQuestions": 3385,
   "easySolved": 98,
   "totalEasy": 842,
   "mediumSolved": 71,
   "totalMedium": 1766,
   "hardSolved": 6,
   "totalHard": 777,
   "acceptanceRate": 77.84,
   "ranking": 614944,
   "contributionPoints": 715,
   "reputation": 0
}
\`\`\`

## Technologies Used

- **HTML5**: The basic structure and content of the dashboard.
- **CSS3**: For styling the progress bar, cards, and general layout.
- **JavaScript**: For fetching the LeetCode API data and dynamically updating the dashboard.

## Contributing

If you want to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature-branch\`).
3. Commit your changes (\`git commit -am 'Add new feature'\`).
4. Push to the branch (\`git push origin feature-branch\`).
5. Submit a pull request.
