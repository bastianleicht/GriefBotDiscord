# Discord Grief Bot
Dieser Bot wurde programmiert um Discord Server zu griefen. Er verfügt über viele Features und Commands (unten gelistet).
Falls du einen Vorschlag hast, lass es mich gerne wissen.

## Installation
```bash
npm install
```

Benenne ``config.json.example`` in  ``config.json`` um und füge deinen Bot Token ein. Dort kannst du auch den Prefix anpassen.
Den Bot Token kannst du im [Discord Developer Portal](https://discord.com/developers/applications) kopieren oder (wenn du es noch nicht hast) einen Bot erstellen.

## Start
```bash
npm start
```

## Commands
```
auth {secret key}                     Initialisiert dich im Bot.
listening                             Dumpt einen Array aller derzeit Initialisierten User in der Console.
activate                              Aktiviert alle Commands für dich.
deactivate                            Deaktiviert alle Commands für dich.
eval { code }                         Führt JS code aus.
leave                                 Verlässt den Discord Server.

rolespam { amount }                   Erstellt eine Anzahl an Rollen welche random Unicode Charaktere als Namen haben.
channelspam { amount }                Erstellt eine Anzahl an Channeln welche random Unicode Charaktere als Name haben.

massdm { nachricht }                  Sendet eine nachricht an alle User des Servers.

ban { @user }                         Bannt den verlinkten User.
ban all                               Bannt alle User von dem Discord.

kick { @user }                        Kickt den verlinkten User.
kick all                              Kickt alle User von dem Discord.

crypt all channels                    Benennt alle Channel in random Unicode Charaktere um.
crypt all roles                       Benennt alle Rollen in random Unicode Charaktere um.
crypt role { @role }                  Benennt die verlinkte Rolle in random Unicode Charaktere um.
crypt channel { #channel }            Benennt den verlinkten Channel in random Unicode Charaktere um.

delete channel                        Löscht den derzeitigen Channel.
delete channeles                      Löscht alle Channel.
delete role { @role }                 Löscht die verlinkte Rolle.
delete roles                          Löscht alle Rollen.

clear                                 Löscht alle Nachrichten in einem Channel.
clear all                             Löscht alle Nachrichten in einem Channel.
clear { #channel }                    Löscht alle Nachrichten in dem verlinkten Channel.
clear { id }                          Löscht alle nachrichten in dem verlinkten Channel.

edit all channels { name }            Editiert alle Channel auf den Namen.
edit all roles { name }               Editiert alle Rollen auf den Namen.
edit channel { #channel } { name }    Editiert den verlinkten Channel auf den Namen.
edit role { @role } { name }          Editiert die verlinkte Rolle auf den Namen.
```

## Contributing
Pull requests sind immer willkommen. Wenn du größere änderungen hast, erstelle bitte eine issue, damit man sich nochmal darüber unterhalten kann.

## License
[LICENSE](https://bastianleicht.de/license)
