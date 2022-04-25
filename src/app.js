export default function healthStatus(character) {
    let condition;
    if (character.health > 50) {
        condition = 'healthy';
    } else if ((character.health < 50) && (character.health >= 15)) {
        condition = 'wounded';
    } else if (character.health < 15) {
        condition = 'critical';
    } else {
        condition = 'oops something goes wrong'
    }
    return condition;
}