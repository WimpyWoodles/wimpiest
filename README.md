# wimpiest

1) Install Homebrew: 

    '''/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'''


2) Install node and npm

    '''brew install node'''


3) Clone the repo

'''git clone https://github.com/WimpyWoodles/wimpiest.git'''


4) Navigate to the project and:

    '''npm install'''


5) Make sure you have the latest docker. Pull the image:

    '''docker pull elgalu/selenium'''


6) Run the container: 

    '''docker run -d --name=grid -p 4444:24444 -p 5900:25900 \
     -e TZ="US/Pacific" -v /dev/shm:/dev/shm --privileged elgalu/selenium'''


7) Verify selenium server is up and running (Should see "Selenium all done and ready for testing!"):

    '''docker exec grid wait_all_done 30s'''


8) Run the tests!:

    '''./bin/nightwatch ./src/Tests'''