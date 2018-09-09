/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Done: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined', function() {
        // Start of 'url defined' spec
          for(let feed of allFeeds) {
          // For all feeds in allFeeds
              expect(feed.url).toBeDefined;
              // There is an expectation that each URL is defined
              expect(feed.url.length).not.toBe(0);
              /* There is also an expectation that each feed's length is
              not zero (0) */
          }
        });

        /* Done: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined', function() {
        // Start of 'name defined' spec
          for(let feed of allFeeds) {
            // For all feeds in allFeeds
            expect(feed.name).toBeDefined;
            // There is an expectation that each feed's name is defined
            expect(feed.name.length).not.toBe(0);
            /* There is also an expectation that each feed's name is not
            zero (0) */
          }
        });

    /* TODO: Write a new test suite named "The menu" */
      describe('The menu', function() {

        /* Done: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden', function() {
          // Start of the 'is hidden' spec
              const body = document.querySelector('body');
              // Selects the body and stores it in the const body
              expect(body.classList.contains('menu-hidden')).toBe(true);
              /* There is an expectation that the const body's classList
              contains the class 'menu-hidden'*/
          });

         /* Done: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('toggles on and off', function() {
            const body = document.querySelector('body');
            // Selects the body and stores it in the const body
            const menu = document.querySelector('.menu-icon-link');
            // Selects the menu and stores it in the const menu

            menu.click(); // Calls the click method
            expect(body.classList.contains('menu-hidden')).toBe(false);
            /* There is an expectation that the menu is not hidden
            after it is clicked*/

            menu.click(); // Calls the click method
            expect(body.classList.contains('menu-hidden')).toBe(true);
             /* There is also an expectation that the menu is hidden
            after it is clicked again */
         });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
  });
});
