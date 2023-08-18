const programmingSkillsChart = new Chart(document.getElementById('programmingSkillsChart'), {
  type: 'pie', // เปลี่ยนประเภทกราฟเป็น 'pie'
  data: {
    labels: ['C', 'C++', 'Python', 'HTML5', 'Java'],
    datasets: [{
      label: 'Skill Level',
      data: [30, 35, 50, 80, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderWidth: 3
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Programming Skills Chart',
        font: { size: 32 }
      }
    },
    layout: {
      padding: 0
    }
  }
});
