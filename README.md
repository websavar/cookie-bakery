# Auto1 Frontend Developer Challenge

## Foundation

Also he has some requirements on what materials to use:

- As there are no more bricks and cement available you are asked to build the structure
with help of `HTML` and `CSS`.
- As the client is really into frameworks he also asks you to build as much of the bakery as
possible using `Bootstrap` and avoid SVG as he is allergic to it.
- He likes to be up to date so he wants you to use Vue.js or `React`, preferably using CLI
tools (Vue CLI or create-react-app)

## Functionality

After you have built the house, it needs some cookie bakery special features:

- If a customer holds their hand in front of the window (hover the window) it should
transform to a `cookie`. The cookie it transforms to can be taken from
images.google.com.
- If someone knocks on the door (click) an order will be made. Unfortunately there are no
bakers at work so your request must be sent to a `SQLite` Database via `PHP` (optionally
use Symfony 4 or 5). Every request just has a timestamp.
If you have no experience with such technologies the client asks you to do some
research or provide an equivalent solution.
- A click on the sun should switch the bakery to `night mode`. In night mode the whole
scenery will be dark and transforming the window and requesting cookies are not
possible any more.
- If someone tries to use the `mailbox` (click) it falls to the ground because of the poor
construction quality.

## Database and PHP file

You can investigate the request results via the link below:
https://websavar.com/auto1-task/service.php

Database address: `https://websavar.com/auto1-task/database.db`

- A static hypothetical `token` is considered for security issues.

## Setup and run

1. Run `nvm use` to use the proper Node.js version
2. Run `npm install` to install required dependencies
3. Run `npm start` to run the project and Open `http://localhost:3000`
