## 문제 요구 사항

### **1. `App.jsx`**

- 더이상 **`recoil`**은 사용되지 않습니다. **`npm remove recoli`**를 입력해 **`recoil`** 라이브러리를 삭제 합니다.
- 기존에 존재하던 **`Recoil`**과 관련된 모든 데이터를 삭제합니다.

### 2. **`store.js`**

- **`useBoardStore`**를 선언하여 **`zustand`**스토어를 생성합니다.
- **`set`**함수를 사용하여 상태를 업데이트 하는 메서드를 정의합니다.
- **`addBoard`**  보드를 추가하는 메서드 입니다.
- **`removeBoard`** `item.id`를 받아 보드를 삭제하는 메서드입니다. `Array.filter`를 활용합니다.
- **`updateBoard`** `item`  을 받아 `item.id`가 같은 보드의 데이터를 수정하는 메서드입니다. `Array.map`를 활용합니다.
- **`data`** 보드의 배열을 저장합니다. **초기값은 더이상 존재하지 않고, 빈 배열**입니다. **`[]`**
- **`persist`** 미들웨어를 사용하여 데이터를 **`localStorage`**에 자동으로 반영되게 구현합니다.
- **`createJSONStorage`**를 사용하여 데이터를 **`localStorage`**에 저장합니다.

### 3. `Boards.jsx`

- **`useBoardStore`**에서 **`data`**를 가져와 변수로 할당합니다.

### 4. `ControllerDetailModal.jsx`

- **`useBoardStore`**의 **`addBoard`** 를 사용하여 새로운 전역 상태를 추가하여 칸반보드 생성을 가능하게 합니다.

### 5. `BoardEditModal.jsx`

- **`useBoardStore`**의 **`updateBoard`** 를 사용하여 전역 상태를 수정하여 칸반보드 수정을 가능하게 합니다.

### 6. `BoardConfirmModal.jsx`

- **`useBoardStore`**의 **`removeBoard`** 를 사용하여 전역 상태를 삭제하여 칸반보드 삭제를 가능하게 합니다.
