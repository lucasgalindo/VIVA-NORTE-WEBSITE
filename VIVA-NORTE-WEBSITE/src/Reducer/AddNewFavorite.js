export function Reducer_Favorites(state, action) {
    const newState = state.credentials.favorites; // Criar uma cópia do array para manter a imutabilidade

    switch (action.type) {
        case "add":
            if (!newState.includes(action.payload)) {
                newState.push(action.payload);
                state.setCredentials({...state.credentials, favorites: newState});
            }
            break; // Adicionar a instrução break para evitar a queda para o próximo caso

        case "remove":
            if (newState.includes(action.payload) && newState.length > 1) {
                const index = newState.indexOf(action.payload);
                newState.splice(index, 1); // Remover o item no índice especificado
                state.setCredentials({...state.credentials, favorites: newState});
            } else {
                state.setCredentials({...state.credentials, favorites: []});
            }
            break; // Adicionar a instrução break

        default:
            return state;
    }

    return state; // Adicionar uma instrução return padrão se o estado não for modificado
}
