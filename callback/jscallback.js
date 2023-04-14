<script>
    function printABC() {
        console.log("ABC");
    }

    function printDEF() {
        console.log("DEF");
    }

    function func_callBack(func1, func2) {
        func1();
        func2();
    }

    //기존 함수 호출
    printABC();
    printDEF();

    //콜백 함수 호출 -> ()  없음 주의
    func_callBack(printABC, printDEF);
</script>