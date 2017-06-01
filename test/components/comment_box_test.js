import { renderComponent, expect } from  '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

    // it에 정의된 각각의 spec이 실행되기 전에 실행되는 구문
    // kind of setup for the each spec
    let component; // undefined
    beforeEach(() =>{ 
        component = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });


    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

});
