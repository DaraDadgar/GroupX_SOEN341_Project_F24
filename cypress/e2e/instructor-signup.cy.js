describe("Signup Flow", () => {
  it("Navigates to the signup page, enters credentials, and submits successfully", () => {
    // Step 1: Navigate to the homepage and click the "SIGN UP" button
    cy.visit("/"); //Mavigating to the GeneralHomePage
    cy.contains("SIGN UP").click(); // Checks if the homa page contains a "SIGN UP" button, then clicks on it to change route

    // Step 2: Fill out the signup form with dummy data
    cy.url().should("include", "/signup"); // Verify navigation to the signup page
    cy.get('input[name="type"][value="teacher"]').check();
    cy.get('input[name="first-name"]').type("Test"); // Input field for first name
    cy.get('input[name="last-name"]').type("Testing"); // Input field for last name
    cy.get('input[name="email"]').type("testuser@example.com"); // Input field for email
    cy.get('input[name="password"]').type("Test1234"); // Input field for password
    cy.get('input[name="confirm-password"]').type("Test1234"); // Input field for confirm password

    // Step 3: Submit the form
    cy.get('input[type="submit"]').click(); // Assuming a submit button of type 'submit'

    // Step 4: Verify successful signup and navigation
    cy.url().should("include", "/login"); // Navigates the user to the login page upon successfull sign up
    //Added this comment to test if the new ci workflow works or not
  });
});
