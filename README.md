How to start spryker on steam deck
 - desktop mode -> open application konsole
 - enable dev mode `sudo steamos-devmode enable`
 - install docker `sudo pacman -S docker`
 - install docker-compose `sudo pacman -S docker-compose`
 - install docker buildx `sudo pacman -S docker-buildx`
 - add yourself to docker group `sudo usermod -aG docker $USER`
 - check if you see no errors using `docker info` (if you got errors reboot or start docker on user level using `systemctl start docker`)
 - clone jetbrains toolbox (for phpstorm) `git clone https://aur.archlinux.org/jetbrains-toolbox.git`
 - `cd jetbrains-toolbox/`
 - prepare toolbox installation `makepkg`
 - install toolbox `sudo pacman -U jetbrains-toolbox-2.2.2.20062-1-x86_64.pkg.tar.zst`
 - install phpstorm using toolbox
 - clone spryker `git clone https://github.com/spryker-shop/b2c-demo-shop.git`
 - clone spryker docker sdk `git clone https://github.com/spryker/docker-sdk.git docker`
 - prepare spryker docker environment `docker/sdk boot deploy.dev.yml`
 - adjust your host file using its command in output
 - start spryker docker environemnt `docker/sdk up`
 - wait until all messages are progressed in http://queue.spryker.local/
 - Open -> http://yves.de.spryker.local/
 - done

References:
https://steamcommunity.com/app/1675200/discussions/0/7529517132619672170/
https://docs.spryker.com/docs/dg/dev/set-up-spryker-locally/quickstart-guides-install-spryker/quickstart-guide-install-spryker-on-macos-and-linux.html



![started spryker](https://raw.githubusercontent.com/patrickjaja/sprykerdeck/main/PXL_20240303_000714013.jpg)
