//ejecución sincrónica. son bloqueantes

function funcA() {
    console.log('1');
    funcB();
    console.log('2');
};

function funcB(){
    console.log('3');
    funcC();
    console.log('4');
};

function funcC(){
    console.log('5');
};


funcA(); //1,3,5,4,2



