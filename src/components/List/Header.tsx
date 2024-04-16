import styles from './Header.module.css';

interface Props {
    tasksCounter: number;
    checkedTaskCounter: number;
}

export function Header({ tasksCounter, checkedTaskCounter }: Props) {
    return (
        <header className={styles.container}>
            <aside>
                <p>Tarefas Criadas</p>
                <span>{tasksCounter}</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>
                    {tasksCounter === 0 ?
                        tasksCounter
                        : `${checkedTaskCounter} de ${tasksCounter}`
                    }
                </span>
            </aside>
        </header>
    )
} 