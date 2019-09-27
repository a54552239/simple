import $http from '@/assets/js/http'

export function _out(data) {
    return $http.post('api/login/_out', data);
}
