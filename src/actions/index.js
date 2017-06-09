import { SAVE_COMMENT } from './types';

// create action creator which is kind of an object with type and payload
export function saveComment(comment) {
    return {
        type: 'SAVE_COMMENT',
        payload: comment
    }
}