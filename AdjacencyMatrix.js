class GraphWithAdjacencyMatrix {
    constructor() {
        this.matrix = [];
    }

    addVertex() {
        // 현재 정점의 수를 구한다.
        const currentLength = this.matrix.length;

        /**
         * 정점의 수만큼 칸을 추가한다
         * 
         */
        for (let i = 0; i < currentLength.length; i++) {
            this.matrix[i].push(0);
        }
        /*
        * new Array() <-- new Array()를 사용하면 괄호 안에 첫번째 인자 하나만 number 자료형의 숫자를 넣으면 
        * 그 숫자만큼 빈 배열 공간이 생김 
        * ex) new Array(3) = [ undefined, undefined, undefined ]
        * new Array() <-- 만약 괄호안에 여러개의 인자를 주는 경우 그만큼 길이의 배열에 값이 들어감
        * ex) new Array(2, 3, 4) = [ 2, 3, 4 ]
        * fill 함수는 배열의 길이에 따라 그 값을 채워주는 함수이다.
        * 첫번째 인자는 채워줄 값이고 두번째값은 채우기 위한 시작 인덱스, 세번째는 배열의 길이중 어디까지 채울것인가이다.
        * ex) [1, 2, 3].fill(0) = [0, 0 ,0]
        * ex) [1, 2, 3].fill(1, 0) = [1, 0, 0]
        */
        this.matrix.push(new Array(currentLength + 1).fill(0));
    }
}

const graph = new GraphWithAdjacencyMatrix();

graph.addVertex();