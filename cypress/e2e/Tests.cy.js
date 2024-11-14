describe('Unlogged user tests', () => {
  it('Home page loads the nav bar and buttons ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('nav').should("exist")
    cy.get('[class = "sign-up"]').should("exist")
    cy.get('[class = "login"]').should("exist")

    cy.get('[class = "login"]').click()

    cy.url().should('eq', 'http://localhost:3000/login')
  })
  it('Clicking on login button should bring us to login page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[class = "login"]').click()
    cy.url().should('include', '/login')
  })
  it('Clicking on signup button should bring us to signup page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[class = "sign-up"]').click()
    cy.url().should('include', '/signup')
  })

})

describe('Signup and Login for students tests', () => {
  it('Signing up a student should bring us to the login page', () => {
    cy.visit('http://localhost:3000/signup')

    cy.get('[type="radio"][value = "student"]').click()
    cy.get('[id="last-name"]').type("John")
    cy.get('[id="first-name"]').type("Phan")
    cy.get('[id="email"]').type("JohnPhan@hotmail.com")
    cy.get('[id="password"]').type("pass1234")
    cy.get('[id="confirm-password"]').type("pass1234")
    cy.get('[value="Create Account"]').click()

    cy.url().should('include', '/login')
  })

  it("Logging in as a student should redirect to student home page and initialize jwt token", () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[type="radio"][value = "student"]').click()
    cy.get('[id="email"]').type("JohnPhan@hotmail.com")
    cy.get('[id="password"]').type("pass1234")
    cy.get('[value="Log in"]').click()
    
    cy.url().should('include', '/student/home')
    cy.getAllLocalStorage().then((localStorageData) => {
      expect(localStorageData).to.have.key("http://localhost:3000")
    })
  })
  
  it('Log out button should appear at the top right of the screen', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[type="radio"][value = "student"]').click()
    cy.get('[id="email"]').type("JohnPhan@hotmail.com")
    cy.get('[id="password"]').type("pass1234")
    cy.get('[value="Log in"]').click()

    cy.get('[class="logout"').should("exist")

    cy.get('[class="logout"]').click()
    cy.url().should('include', '/login')
    cy.getAllLocalStorage().then((localStorageData) => {
      expect(localStorageData).to.not.have.key("http://localhost:3000")
    })
  })
})

describe('Signup and Login for teachers tests', () => {
  it('Signing up a teacher should bring us to the login page', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get('[type="radio"][value = "teacher"]').click()
    cy.get('[id="first-name"]').type("Phan")
    cy.get('[id="last-name"]').type("Math")
    cy.get('[id="email"]').type("MathPhan@hotmail.com")
    cy.get('[id="password"]').type("pass1234")
    cy.get('[id="confirm-password"]').type("pass1234")
    cy.get('[value="Create Account"]').click()
    cy.url().should('include', '/login')
  })

  it("Logging in as a teacher should redirect to teacher home page and initialize jwt-token based session", () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[type="radio"][value = "teacher"]').click()
    cy.get('[id="email"]').type("MathPhan@hotmail.com")
    cy.get('[id="password"]').type("pass1234")
    cy.get('[value="Log in"]').click()
    cy.url().should('include', '/teacher/home')
    cy.getAllLocalStorage().then((localStorageData) => {
      expect(localStorageData).to.have.key("http://localhost:3000")
    })
  })

  it('Log out button should appear at the top right of the screen', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[type="radio"][value = "student"]').click()
    cy.get('[id="email"]').type("JohnPhan@hotmail.com")
    cy.get('[id="password"]').type("pass1234")
    cy.get('[value="Log in"]').click()

    cy.get('[class="logout"').should("exist")

    cy.get('[class="logout"]').click()
    cy.url().should('include', '/login')

    cy.getAllLocalStorage().then((localStorageData) => {
      expect(localStorageData).to.not.have.key("http://localhost:3000")
    })
  })
})

describe('Teachers team creation tests', () => {
  it("Teachers should be able to create a team according to students available \n Desc: Make two students and assign them together, then make sure the new team is visible", () => {
    cy.visit('http://localhost:3000/signup')
    const firstname = getRandomString();
    const lastname = getRandomString();
    const email = getRandomEmail();
    const password = getRandomString();

    const firstname2 = getRandomString();
    const lastname2 = getRandomString();
    const email2 = getRandomEmail();
    const password2 = getRandomString();

    const teamName = getRandomString();

    cy.get('[type="radio"][value = "student"]').click()
    cy.get('[id="last-name"]').type(lastname)
    cy.get('[id="first-name"]').type(firstname)
    cy.get('[id="email"]').type(email)
    cy.get('[id="password"]').type(password)
    cy.get('[id="confirm-password"]').type(password)
    cy.get('[value="Create Account"]').click()

    cy.url().should("include", "/login")
    cy.get('[class="sign-up"]').click()

    cy.get('[type="radio"][value = "student"]').click()
    cy.get('[id="last-name"]').type(lastname2)
    cy.get('[id="first-name"]').type(firstname2)
    cy.get('[id="email"]').type(email2)
    cy.get('[id="password"]').type(password2)
    cy.get('[id="confirm-password"]').type(password2)
    cy.get('[value="Create Account"]').click()

    cy.visit('http://localhost:3000/login')
    cy.get('[type="radio"][value = "teacher"]').click()
    cy.get('[id="email"]').type("MathPhan@hotmail.com")
    cy.get('[id="password"]').type("pass1234")
    cy.get('[value="Log in"]').click()
    cy.get('[data-testid="Create Button"]').click()
    cy.url().should('include', '/teacher/team-creation')
    

  
    cy.get(`[value="${email}"]`).click()
    cy.get(`[value="${email2}"]`).click()
    cy.get('[name="name"').type(teamName)
    cy.get('[type="submit"').click()

    cy.url().should('include', "/teacher/home")
    cy.get(`[data-testid=${teamName}]`).should("exist")
  })
})

describe('Student evaluation tests', () => {
  it("Students should be able to assess their teammates and only do it once \n Desc: Making 2 students and assessing from one of their perspective", () => {
    cy.visit('http://localhost:3000/signup')
    const firstname = getRandomString();
    const lastname = getRandomString();
    const email = getRandomEmail();
    const password = getRandomString();

    const firstname2 = getRandomString();
    const lastname2 = getRandomString();
    const email2 = getRandomEmail();
    const password2 = getRandomString();

    const teamName = getRandomString();

    cy.get('[type="radio"][value = "student"]').click()
    cy.get('[id="last-name"]').type(lastname)
    cy.get('[id="first-name"]').type(firstname)
    cy.get('[id="email"]').type(email)
    cy.get('[id="password"]').type(password)
    cy.get('[id="confirm-password"]').type(password)
    cy.get('[value="Create Account"]').click()

    cy.url().should("include", "/login")
    cy.get('[class="sign-up"]').click()

    cy.get('[type="radio"][value = "student"]').click()
    cy.get('[id="last-name"]').type(lastname2)
    cy.get('[id="first-name"]').type(firstname2)
    cy.get('[id="email"]').type(email2)
    cy.get('[id="password"]').type(password2)
    cy.get('[id="confirm-password"]').type(password2)
    cy.get('[value="Create Account"]').click()

    //Teacher assigns team
    cy.visit('http://localhost:3000/login')
    cy.get('[type="radio"][value = "teacher"]').click()
    cy.get('[id="email"]').type("MathPhan@hotmail.com")
    cy.get('[id="password"]').type("pass1234")
    cy.get('[value="Log in"]').click()
    cy.get('[data-testid="Create Button"]').click()
    cy.url().should('include', '/teacher/team-creation')
    
    cy.get(`[value="${email}"]`).click()
    cy.get(`[value="${email2}"]`).click()
    cy.get('[name="name"').type(teamName)
    cy.get('[type="submit"').click()

    cy.get('[class="logout"').click()

    cy.visit('http://localhost:3000/login')
  
    cy.get('[type="radio"][value = "student"]').click()
    cy.get('[id="email"]').type(email)
    cy.get('[id="password"]').type(password)
    cy.get('[value="Log in"]').click()

    cy.get('[class="evaluate"]').click()
    cy.get(`[data-testid="${firstname2 + " " + lastname2}"]`).click()
    cy.get('[type="submit"]').click()

    cy.get(`[data-testid = "Cooperation 1"]`).click()
    cy.get(`[data-testid = "Conceptual 2"]`).click()
    cy.get(`[data-testid = "Practical 2"]`).click()
    cy.get(`[data-testid = "Work 2"]`).click()
    cy.get(`[data-testid = "comments"]`).type("Not a good teammate he sucked")

    cy.get('[type="submit"]').click()
    cy.get('[class="evaluate"]').click()
    cy.get('[data-testid = "emptyStudents"').should("exist")
  })
})



function getRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function getRandomEmail() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  result += "@hotmail.com"
  return result;
}
