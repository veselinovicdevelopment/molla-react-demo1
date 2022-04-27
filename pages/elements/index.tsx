import { NextPage } from 'next';
import ElementList from '~/components/partials/elements/element-list';

const Elements: NextPage = () => {
    return (
        <main className="main pt-3">
            <ElementList />
        </main>
    );
};

export default Elements;
