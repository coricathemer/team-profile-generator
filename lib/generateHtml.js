const generateManagerCard = (managerArr) => {
  return managerArr.map((Manager) => {
    return `
    <div class="card m-3" style="width: 20rem;">
        <div class="card-header text-white bg-primary">
            <h5 class="card-title">${Manager.employeeName}</h5>
            <h6 class="card-subtitle mb-2 text-light"><i class="fas fa-mug-hot"></i>Manager</h6>
        </div> 
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${Manager.email}" class="card-link">${Manager.email}</a></li>
            <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
        </ul>
    </div>
    `
  });
}

const generateEngineerCards = (engineerArr) => {
  if (!engineerArr) {
    return '';
  }
  return engineerArr.map((Engineer) => {
    return `
    <div class="card m-3" style="width: 20rem;">
        <div class="card-header text-white bg-primary">
            <h5 class="card-title">${Engineer.employeeName}</h5>
            <h6 class="card-subtitle mb-2 text-light"><i class="fas fa-glasses"></i> Engineer</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${Engineer.email}" class="card-link">${Engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.github}" target="_blank" class="card-link">${Engineer.github}</a></li>
        </ul>
    </div>
    `
  }).join('');
}

const generateInternCards = (internArr) => {
  if (!internArr) {
      return '';
    }
  return internArr.map((Intern) => {
      return `
      <div class="card m-3" style="width: 20rem;">
          <div class="card-header text-white bg-primary">
              <h5 class="card-title">${Intern.employeeName}</h5>
              <h6 class="card-subtitle mb-2 text-light"><i class="fas fa-user-graduate"></i> Intern</h6>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${Intern.id}</li>
              <li class="list-group-item">Email: <a href="mailto: ${Intern.email}" class="card-link">${Intern.email}</a></li>
              <li class="list-group-item">School:${Intern.school}</li>
          </ul>
      </div>
      `
  }).join('');
}


module.exports = (teamData) => {
  
  const managerArr = teamData.filter(Manager => {
      return Manager.constructor.name == "Manager";
  })

  const engineerArr = teamData.filter(Engineer => {
      return Engineer.constructor.name == "Engineer";
  })
  const internArr = teamData.filter(Intern => {
      return Intern.constructor.name == "Intern";
  })

return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <!-- Bootstrap CDN -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div>
          <h1>My Team</h1>
        </div>
      </header>
      <main>
        <div class="container">
            <div class="row d-flex justify-content-center">
                ${generateManagerCard(managerArr)}
                ${generateEngineerCards(engineerArr)}
                ${generateInternCards(internArr)}
            </div>
        </div>
      </main>
      <!-- for bootstrap -->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  
    </body>
    </html>
      `;
    };