from constants import useless_columns, outfield_player_columns, positions_mapping, playing_statuses_mapping, \
    work_rate_mapping, body_types, columns_to_bins


def get_useless_columns():
    return useless_columns


def get_outfield_player_columns():
    return outfield_player_columns


def get_positions_mapping():
    return positions_mapping


def get_playing_statuses_mapping():
    return playing_statuses_mapping


def get_work_rate_mapping():
    return work_rate_mapping


def get_body_types():
    return body_types


def get_columns_to_bins():
    return columns_to_bins


def is_position(player_positions, target_positions):
    for position in player_positions.split(', '):
        if position in target_positions:
            return 1
    return 0


def playing_status(status, target_status):
    if status in target_status:
        return 1
    return 0


def map_work_rates(work_rate):
    attacking, defending = work_rate.split('/')
    return get_work_rate_mapping()[attacking], get_work_rate_mapping()[defending]
