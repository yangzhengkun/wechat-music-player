#!/usr/bin/env bash

chmod +x /home/songbin

/usr/bin/cp -r /home/songbin /usr/bin/songbin
/usr/bin/cp -r /home/songs.service /lib/systemd/system/songs.service

systemctl daemon-reload && systemctl restart songs.service