[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br/>
<p align="center">
  <a href="https://github.com/routerabfrage/GriefBotDiscord">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">GriefBotDiscord</h3>
  <p align="center">
    GriefBotDiscord is a fully featured Griefing Bot with some unique Features.
    <br/>
    <br/>
    <a href="https://github.com/routerabfrage/GriefBotDiscord/issues">Report Bug</a>
    ·
    <a href="https://github.com/routerabfrage/GriefBotDiscord/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#commands">Commands</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

GriefBotDiscord is a Project I'm currently maintaining in my freetime. I originally made it for a Friend and now it is an Open Source Project.

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/routerabfrage/GriefBotDiscord.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

To use your Bot you have to rename the config from ```config.json.example``` to ```config.json```.

Then you have to fill in your Settings and most importantly the Bot Token. You can get or generate your Token on the [Discord Developers Page](https://discord.com/developers/applications/).
If you want, you could even set the Token as an environment variable.

<!-- Commands -->
## Commands

```
auth {secret key}                     Initialises you with the Bot.
listening                             Dumps an Array of initialized Users in the Console.
activate                              Activates all commands for you.
deactivate                            Deactivates all commands for you.
eval { code }                         Evaluates the specified Code.
leave                                 Leaves the current Discord Server.
prune                                 Removes inactive (30 Days) Users.

rolespam { amount }                   Creates a specified count of Roles with random Unicode characters.
channelspam { amount }                Creates a specified count of Channels with random Unicode characters.

massdm { nachricht }                  Sends a message to every user of the Discord Server. (This message can be multiple lines long!)

ban { @user }                         Banns the linked User.
ban all                               Banns every User of the Discord.

kick { @user }                        Kicks the linked User.
kick all                              Kicks every User of the Discord.

crypt all channels                    Renames every Channel to random Unicode charakters.
crypt all roles                       Renames every Role to random Unicode charakters.
crypt role { @role }                  Renames the specified Role to random Unicode charakters.
crypt channel { #channel }            Renames the specified Channel to random Unicode charakters.

delete channel                        Deletes the current Channel.
delete channeles                      Deletes every Channel.
delete role { @role }                 Deletes the linked Role.
delete roles                          Deletes every Role.

clear                                 Deletes every message in the current Channel.
clear all                             Deletes every message in the current Channel.
clear { #channel }                    Deletes every message in the linked Channel.
clear { id }                          Deletes every message in the linked Channel.

edit all channels { name }            Renames every Channel to the specified Name.
edit all roles { name }               Renames every Role to the specified Name.
edit channel { #channel } { name }    Renames the linked Channel to the specified Name.
edit role { @role } { name }          Renames the linked Role to the specified Name..
```


<!-- CONTRIBUTING -->
## Contributing

If you want to help, see the [open issues](https://github.com/routerabfrage/GriefBotDiscord/issues) for a list of proposed features (and known issues).


Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the BSD 2-Clause License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Bastian Leicht - [@bastianleicht](https://twitter.com/bastianleicht) - mail@bastianleicht.de

Project Link: [https://github.com/routerabfrage/GriefBotDiscord](https://github.com/routerabfrage/GriefBotDiscord)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/routerabfrage/GriefBotDiscord.svg?style=for-the-badge
[contributors-url]: https://github.com/routerabfrage/GriefBotDiscord/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/routerabfrage/GriefBotDiscord.svg?style=for-the-badge
[forks-url]: https://github.com/routerabfrage/GriefBotDiscord/network/members
[stars-shield]: https://img.shields.io/github/stars/routerabfrage/GriefBotDiscord.svg?style=for-the-badge
[stars-url]: https://github.com/routerabfrage/GriefBotDiscord/stargazers
[issues-shield]: https://img.shields.io/github/issues/routerabfrage/GriefBotDiscord.svg?style=for-the-badge
[issues-url]: https://github.com/routerabfrage/GriefBotDiscord/issues
[license-shield]: https://img.shields.io/github/license/routerabfrage/GriefBotDiscord.svg?style=for-the-badge
[license-url]: https://github.com/routerabfrage/GriefBotDiscord/blob/master/LICENSE.txt