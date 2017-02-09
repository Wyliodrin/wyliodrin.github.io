# We are applying for Google Summer of Code

We are very exited to announce thet we are applying for GSoC 2017. We have some really nice projects proposed.

## Stand alone application

Wyliodrin STUDIO is currently available as a Chrome Application. That means that it currently runs on Chrome OS and any other system where Google Chrome is available.

Google has announced that it will retire Chrome Applications from all the platforms other than the Chromebook. While Chromebook users won't be affected, users using other systems will not be able to use Wyliodrin STUDIO. The solution to this is to port Wyliodrin STUDIO as a stand alone application. There are two ways of doing this, out of which you can choose the prefered one:

* [Electron](http://electron.atom.io/)
* [NW.js](https://nwjs.io/)

There are ups and downs for each of the two, tangiblejs makes a [comparison](http://tangiblejs.com/posts/nw-js-and-electron-compared-2016-edition) between the two.

Our final goal is to be able to maintain the Chromebook version and the stand alone version in one code base. Based on the grunt command issued, it would build one or the other.

### Knowledge required
* NodeJS (javascript)
* Grunt build tools
* AngularJS

### Mentors
* [Razvan Serban](https://github.com/serban-razvan)
* [Alexandru Vochescu](https://github.com/valexandru)

## Update visual programming

Visual programming is one of the programming langguages supported by Wyliodrin STUDIO. Visual programming helps first timers to write an application in a graphical way by dragging blocks (similar to Scratch). What is more, users can visualise the coresponding python source code as it gets generated on the fly. This whole visual environment is an implementation of Google [Blockly](https://developers.google.com/blockly/).

As part of implementing Blockly, we wrote several blocks for sensors and peripherals control and access. Some of these visual elements are currently outdated. In addition, we would like to add a new feature which would allow users to create the visual blocks they desire.

Features that we would like to add are:

* improve UI (redesign of the toolbox)
* rethink some of the blocks
* rewrite some outdated blocks (facebook, etc)
* allow users to create new blocks

### Knowledge required
* Javascript
* Familiarity with blockly 
* Python (for writing the blocks generator)

### Mentor
* [Ioana Culic](https://github.com/ioanaculic)

## Support additional firmware 
Support embedded hardware platforms (OpenMote, TelosB, etc.) and different embedded OSes (RIOT-OS, ContikiOS, OpenWSN, etc.)

Wyliodryn STUDIO has an experimental version that allows users to program an OpenMote (http://www.openmote.com/) that is attached to a board (Raspberry Pi only at this moment). This experimental version supports only RIOT-OS (https://riot-os.org/).

For this project the objective is to extend the supported embedded devices and operating systems. The goal is to have a version that is able to re-flash and execute other commands on OpenMote and TelosB-like motes (https://telosbsensors.wordpress.com/); and suppport the two most used Real-Time operating systems: RIOT-OS and ContikiOS (http://www.contiki-os.org/).

Some features that will be required and that are not available now include: 
* updating the BSL script for embedded devices;
* remotely reseting the embedded device;
* erase the flash memory
* update the embedded OS version (repository)

An advanced feature would be to have files on the user application that are linked to files internal to the OS (such as drivers, etc.) and allow users to easily change these files.

The project should be developed in a way that easily allow new platforms and OSes to be integrated in the future.

### Knowlegde needed
* Python
* C language
* Bash scripting and UNIX commands
* Javascript

### Mentors
* [Pedro Henrique Gomes](https://github.com/pedrohenriquegomes), USC
* [Jason Tran](https://github.com/jasonatran), USC
* [Razvan Serban](https://github.com/valexandru), Wyliodrin


## Schematics Editor
Every project created using Wyliodrin STUDIO can have a [Fritzing](http://fritzing.org/home/) schematics attached to it. This way if a user shares a project to another one, the project will contain all the information needed to be replicated. For this, users need to download Fritzing, draw the schematics, export it as SVG and finally import it into Wyliodrin STUDIO. 

This project's idea is to allow users to draw the schematics directly in Wyliodrin STUDIO (an example of how this should look like [breadboard-circuits](https://github.com/cdog/breadboard-circuits) ). The implies importing the Fritzing components and allowing users to place them in the schematics.

### Knowledge needed
* Javascript
* D3.js (or similar)
* HTML

### Mentors
* [Ioana Culic](https://github.com/ioanaculic)
* [Razvan Serban](https://github.com/razvan-serban)


## Improve Dashboard

Each Wyliodrin STUDIO project has assigned a dashboard where users can drag and drop graphs and plot data on them. At the momment, the dashboard feature is not very complex. Graphs can be added one next to the other and can be rearranged only by moving them left or right. Graphs can only display time series or scalar values.

The idea of this project is to design and implement a new dashboard, that would allow:
* drag and drop graphs
* move graphs around the dashboard
* plot multiple signals on the same graph
* display non-time series

### Mentors
* [Ioana Culic](https://github.com/ioanaculic)
* [Ovidiu Stoica](https://github.com/oviska)

### Knowledge required
* Javascript
  * [highcharts](http://www.highcharts.com/)
* HTML
* CSS
* AngularJS

## Scientific graphs

Each Wyliodrin STUDIO project has assigned a dashboard where users can drag and drop graphs and plot data on them. In order to send data to the dashboard, users need to import the [libwyliodrin](https://github.com/wyliodrin/libwyliodrin) library and use its functions; eg:

```python
import wyliodrin

# get a value somehow

wyliodrin.sendSignal ('signal', value)
```

The code presented above will draw a point on the dashboard. 

We aim to create a way to make some more complex cumputations and display them on the graphs. Python has the *pandas* and *numpy* libraries (and many more) that allow users to process data. These libraries open a window on the running device and display the data. However, in our case we deed the values to be displayed in the computer's browser, not on the embedded board running the application.

The idea of this project is to write a *matplotlib* backend that instead of drawing the graph would send an SVG to Wyliodrin STUDIO.

### Knowlegde needed
* Python
  * [matplotlib](http://matplotlib.org)
* Javascript (Ndoejs)
* AngularJS

## Write Tutorials
Wyliodrin STUDIO is designed with education in mind. When a users opens it the first time, he will ask the question "Now what?".

It is eally important for us to have solid set of getting started tutorials that users can use to start working with IoT. A tutorial implies:
* writing a notebook with the steps that a user needs to take to be able to write the application;
* write the sample application
* draw the schematics of the hardware

### Knowledge needed
* Python
* Markdown
* Basic Electrical Enineering (to build the device)

### Mentors
* [Alexandru Radovici](https://github.com/alexandruradovici)
* [Ioana Culic](https://github.com/ioanaculic)

## Improve Shell

Wyliodrin STUDIO allows users to open a shell directly to the device they are connected to. For this, it uses [xterm.js](https://github.com/sourcelair/xterm.js). 

For this project we would like to enhance xterm.js to have the following features implemented for the shell:
* scroll up and down
* select 
* copy and paste

### Mentors
* [Razvan Serban](https://github.com/serban-razvan)
* [Alexandru Vochescu](https://github.com/valexandru)

## Document protocol

Wyliodrin STUDIO allows users to control the embedded distances from the browser. This happens by using messages through which the browser gives commands to the board, theb the board executes them and sends back an answer.

For this project we would like to have the protcol used documented.